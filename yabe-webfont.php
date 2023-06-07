<?php

/**
 * Yabe Webfont
 *
 * @wordpress-plugin
 * Plugin Name:         Yabe Webfont
 * Plugin URI:          https://webfont.yabe.land
 * Description:         Self-host Google Fonts and the dedicated custom fonts manager for WordPress with seamless visual/page builders integration.
 * Version:             1.0.29
 * Requires at least:   6.0
 * Requires PHP:        7.4
 * Author:              Rosua
 * Author URI:          https://rosua.org
 * Donate link:         https://ko-fi.com/Q5Q75XSF7
 * Text Domain:         yabe-webfont
 * Domain Path:         /languages
 *
 * @package             Yabe
 * @author              Joshua <id@rosua.org>
 */
declare (strict_types=1);
namespace _YabeWebfont;

\defined('ABSPATH') || exit;
\define('YABE_WEBFONT_FILE', __FILE__);
/**
 * Namespace or prefix of the Package's on the wp_options table.
 */
\define('YABE_WEBFONT_OPTION_NAMESPACE', 'yabe_webfont');
\define('YABE_WEBFONT_HOSTED_WAKUFONT', 'https://wakufont-hosted.rosua.org');
\define('YABE_WEBFONT_EDD_STORE', ['url' => 'https://rosua.org', 'item_id' => 18, 'author' => 'idrosua']);
\define('YABE_WEBFONT_REST_NAMESPACE', 'yabe-webfont/v1');
if (\file_exists(__DIR__ . '/vendor/scoper-autoload.php')) {
    require_once __DIR__ . '/vendor/scoper-autoload.php';
} else {
    require_once __DIR__ . '/vendor/autoload.php';
}
\Yabe\Webfont\Plugin::get_instance()->boot();
