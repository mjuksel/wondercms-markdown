<?php
/**
 * SimpleMDE content plugin with Marked.js for page visits.
 *
 * @author Marcel Portma
 * @version 3.0.6
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
   if ($Wcms) {
    $script = <<<EOT
      <script src="https://cdn.jsdelivr.net/npm/marked"></script>
EOT;
    $args[0] .= $script;
   }
   if (!$Wcms->loggedIn) {
    $script = <<<EOT
      <script src="{$Wcms->url('plugins/wondercms-markdown/js/visitor.js')}"></script>
EOT;
    $args[0] .= $script;
   }
   if ($Wcms->loggedIn) {
    $script = <<<EOT
      <script src="https://cdn.jsdelivr.net/npm/simplemde@1.11.2/dist/simplemde.min.js"></script>
      <script src="{$Wcms->url('plugins/wondercms-markdown/js/loadEditor.js')}"></script>
EOT;
    $args[0] .= $script;
   }
  return $args;
}

function mdeCSS($args) {
  global $Wcms;
  if ($Wcms) {
  $script = <<<EOT
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css">
    <link rel="stylesheet" href="{$Wcms->url('plugins/wondercms-markdown/css/custom.css')}">
EOT;
  $args[0] .= $script;
 }
 if ($Wcms->loggedIn) {
 $script = <<<EOT
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/simplemde@1.11.2/dist/simplemde.min.css">
EOT;
 $args[0] .= $script;
}
  return $args;
}