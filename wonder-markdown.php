<?php
/**
 * Trumbowyg plugin.
 *
 * It transforms all the editable areas into the Trumbowyg inline editor.
 *
 * @author Marcel Portma
 * @version 3.0.1
 */

global $Wcms;

if (defined('VERSION')) {
  define('version', VERSION);
  defined('version') OR die('Direct access is not allowed.');
}

$Wcms->addListener('js', 'mdeJS');
$Wcms->addListener('css', 'mdeCSS');

function mdeJS($args) {
  global $Wcms;
   if (!$Wcms->loggedIn) {
    $script = <<<EOT
      <script src="{$Wcms->url('plugins/wonder-markdown/js/snarkdown.js')}"></script>
      <script src="{$Wcms->url('plugins/wonder-markdown/js/visitor.js')}"></script>
EOT;
    $args[0] .= $script;
   }
   if ($Wcms->loggedIn) {
    $script = <<<EOT
      <script src="{$Wcms->url('plugins/wonder-markdown/js/simple-mde.js')}"></script>
      <script src="{$Wcms->url('plugins/wonder-markdown/js/loadEditor.js')}"></script>
EOT;
    $args[0] .= $script;
   }
  return $args;
}

function mdeCSS($args) {
  global $Wcms;
  if (!$Wcms->loggedIn) {
    $script = <<<EOT
      <link rel="stylesheet" href="{$Wcms->url('plugins/wonder-markdown/css/wmd-styles.css')}" media="screen">
EOT;
    $args[0] .= $script;
  }
    if ($Wcms->loggedIn) {
    $script = <<<EOT
      <link rel="stylesheet" href="{$Wcms->url('plugins/wonder-markdown/css/simple-mde.css')}" media="screen">
EOT;
    $args[0] .= $script;
   }
  return $args;
}