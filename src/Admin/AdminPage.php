<?php

/*
 * This file is part of the Yabe package.
 *
 * (c) Joshua <id@rosua.org>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare (strict_types=1);
namespace Yabe\Webfont\Admin;

use _YabeWebfont\EDD_SL\PluginUpdater;
use WP_Query;
use Yabe\Webfont\Plugin;
use Yabe\Webfont\Utils\Common;
use Yabe\Webfont\Utils\Config;
use Yabe\Webfont\Utils\Upload;
class AdminPage
{
    public function __construct()
    {
        \add_filter('wp_check_filetype_and_ext', static fn($data, $file, $filename, $mimes) => Upload::disable_real_mime_check($data, $file, $filename, $mimes), 10, 4);
        \add_filter('upload_mimes', static fn($mime_types) => Upload::upload_mimes($mime_types), 1000001);
        \add_action('admin_menu', fn() => $this->add_admin_menu());
        if (Config::get('misc.hide_media_library', \false)) {
            \add_filter('ajax_query_attachments_args', fn(array $query) => $this->ajax_query_attachments_args($query), 1000001);
            \add_action('load-upload.php', function () {
                \add_action('pre_get_posts', fn(WP_Query $wpQuery) => $this->load_upload_pre_get_posts($wpQuery), 1000001);
            });
        }
    }
    public static function get_page_url() : string
    {
        return \add_query_arg(['page' => \YABE_WEBFONT_OPTION_NAMESPACE], \admin_url('themes.php'));
    }
    public static function redirect_to_page() : void
    {
        Common::redirect(self::get_page_url());
    }
    public static function add_redirect_submenu_page($root_slug)
    {
        \add_submenu_page($root_slug, \__('Yabe Webfont', 'yabe-webfont'), \__('Yabe Webfont', 'yabe-webfont'), 'manage_options', 'yabe-webfont-builder-redirect', static fn() => self::redirect_to_page());
    }
    public function add_admin_menu()
    {
        $hook = \add_theme_page(\__('Yabe Webfont', 'yabe-webfont'), \__('Yabe Webfont', 'yabe-webfont'), 'manage_options', \YABE_WEBFONT_OPTION_NAMESPACE, fn() => $this->render());
        \add_action('load-' . $hook, fn() => $this->init_hooks());
    }
    private function render()
    {
        \add_filter('admin_footer_text', fn($text) => $this->admin_footer_text($text), 10001);
        echo '<div id="yabe-webfont-app" class=""></div>';
    }
    private function init_hooks()
    {
        \add_action('admin_enqueue_scripts', fn() => $this->enqueue_scripts());
    }
    private function enqueue_scripts()
    {
        \wp_enqueue_media();
        \wp_enqueue_style(\YABE_WEBFONT_OPTION_NAMESPACE . '-app', \plugin_dir_url(\YABE_WEBFONT_FILE) . 'build/app.css', [], \filemtime(\plugin_dir_path(\YABE_WEBFONT_FILE) . 'build/app.css'));
        \wp_enqueue_script(\YABE_WEBFONT_OPTION_NAMESPACE . '-app', \plugin_dir_url(\YABE_WEBFONT_FILE) . 'build/app.js', [], \filemtime(\plugin_dir_path(\YABE_WEBFONT_FILE) . 'build/app.js'), \true);
        \wp_set_script_translations(\YABE_WEBFONT_OPTION_NAMESPACE . '-app', 'yabe-webfont');
        \wp_localize_script(\YABE_WEBFONT_OPTION_NAMESPACE . '-app', 'yabeWebfont', ['_version' => Plugin::VERSION, '_wpnonce' => \wp_create_nonce(\YABE_WEBFONT_OPTION_NAMESPACE), 'option_namespace' => \YABE_WEBFONT_OPTION_NAMESPACE, 'web_history' => self::get_page_url(), 'rest_api' => ['nonce' => \wp_create_nonce('wp_rest'), 'root' => \esc_url_raw(\rest_url()), 'namespace' => \YABE_WEBFONT_REST_NAMESPACE, 'url' => \esc_url_raw(\rest_url(\YABE_WEBFONT_REST_NAMESPACE))], 'assets' => ['url' => \plugin_dir_url(\YABE_WEBFONT_FILE)], 'lite_edition' => !\class_exists(PluginUpdater::class), 'hostedWakufont' => \rtrim(\apply_filters('f!yabe/webfont/font:wakufont_self_hosted', \defined('YABE_SELF_HOSTED_WAKUFONT') ? \constant('YABE_SELF_HOSTED_WAKUFONT') : \YABE_WEBFONT_HOSTED_WAKUFONT), '/')]);
    }
    private function ajax_query_attachments_args(array $query) : array
    {
        if ($query['post_type'] !== 'attachment') {
            return $query;
        }
        if (!isset($_SERVER['HTTP_REFERER']) || \strpos($_SERVER['HTTP_REFERER'], 'page=yabe_webfont') === \false) {
            $all_mimes = \get_allowed_mime_types();
            $query['post_mime_type'] = $all_mimes;
        }
        return $query;
    }
    private function load_upload_pre_get_posts(WP_Query $wpQuery) : void
    {
        if (!isset($_SERVER['HTTP_REFERER']) || \strpos($_SERVER['HTTP_REFERER'], 'page=yabe_webfont') === \false) {
            $all_mimes = \get_allowed_mime_types();
            $wpQuery->set('post_mime_type', $all_mimes);
        }
    }
    private function admin_footer_text($text) : string
    {
        return \sprintf(\__('Thank you for using <b>Yabe Webfont</b>! Join us on the <a href="%s" target="_blank">Facebook Group</a>.', 'yabe-webfont'), 'https://l.suabahasa.dev/YkV8t');
    }
}
