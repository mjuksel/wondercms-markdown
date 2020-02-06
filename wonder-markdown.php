<?php
/* SimpleMDE content plugin with Marked.js for page visits.
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
   if ($Wcms) {
    $script = <<<EOT
      <script src="https://cdn.jsdelivr.net/npm/marked@0.8.0/lib/marked.js"></script>
EOT;
    $args[0] .= $script;
   }
   if (!$Wcms->loggedIn) {
    $script = <<<EOT
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
    if ($Wcms) {
    $script = <<<EOT
      <link rel="stylesheet" href="{$Wcms->url('plugins/wonder-markdown/css/wmd-styles.css')}">
      <link rel="stylesheet" href="{$Wcms->url('plugins/wonder-markdown/css/simple-mde.css')}">
EOT;
    $args[0] .= $script;
   }
  return $args;
}