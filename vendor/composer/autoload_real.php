<?php

namespace _YabeWebfont;

// autoload_real.php @generated by Composer
class ComposerAutoloaderInit3db67a1fad333eae21227e7706252aa6
{
    private static $loader;
    public static function loadClassLoader($class)
    {
        if ('_YabeWebfont\\Composer\\Autoload\\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }
    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }
        require __DIR__ . '/platform_check.php';
        \spl_autoload_register(array('_YabeWebfont\\ComposerAutoloaderInit3db67a1fad333eae21227e7706252aa6', 'loadClassLoader'), \true, \true);
        self::$loader = $loader = new \_YabeWebfont\Composer\Autoload\ClassLoader(\dirname(__DIR__));
        \spl_autoload_unregister(array('_YabeWebfont\\ComposerAutoloaderInit3db67a1fad333eae21227e7706252aa6', 'loadClassLoader'));
        require __DIR__ . '/autoload_static.php';
        \call_user_func(\_YabeWebfont\Composer\Autoload\ComposerStaticInit3db67a1fad333eae21227e7706252aa6::getInitializer($loader));
        $loader->setClassMapAuthoritative(\true);
        $loader->register(\true);
        $filesToLoad = \_YabeWebfont\Composer\Autoload\ComposerStaticInit3db67a1fad333eae21227e7706252aa6::$files;
        $requireFile = \Closure::bind(static function ($fileIdentifier, $file) {
            if (empty($GLOBALS['__composer_autoload_files'][$fileIdentifier])) {
                $GLOBALS['__composer_autoload_files'][$fileIdentifier] = \true;
                require $file;
            }
        }, null, null);
        foreach ($filesToLoad as $fileIdentifier => $file) {
            $requireFile($fileIdentifier, $file);
        }
        return $loader;
    }
}
