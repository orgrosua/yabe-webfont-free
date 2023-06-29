<?php

namespace _YabeWebfont;

// autoload_real.php @generated by Composer
class ComposerAutoloaderInit49e09ab4ddcb00bf557bd452f55d8c72
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
        \spl_autoload_register(array('_YabeWebfont\\ComposerAutoloaderInit49e09ab4ddcb00bf557bd452f55d8c72', 'loadClassLoader'), \true, \true);
        self::$loader = $loader = new \_YabeWebfont\Composer\Autoload\ClassLoader(\dirname(__DIR__));
        \spl_autoload_unregister(array('_YabeWebfont\\ComposerAutoloaderInit49e09ab4ddcb00bf557bd452f55d8c72', 'loadClassLoader'));
        require __DIR__ . '/autoload_static.php';
        \call_user_func(\_YabeWebfont\Composer\Autoload\ComposerStaticInit49e09ab4ddcb00bf557bd452f55d8c72::getInitializer($loader));
        $loader->setClassMapAuthoritative(\true);
        $loader->register(\true);
        $filesToLoad = \_YabeWebfont\Composer\Autoload\ComposerStaticInit49e09ab4ddcb00bf557bd452f55d8c72::$files;
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
