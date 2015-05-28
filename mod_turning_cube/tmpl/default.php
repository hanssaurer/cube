<?php // no direct access
defined( '_JEXEC' ) or die( 'Restricted access' ); ?>
<?php 
$document = JFactory::getDocument();
 
$document->addScript("http://d3js.org/d3.v3.min.js");
     
$document->addScript(Juri::base() . 'modules/mod_turning_cube/js/turningcube.js');

echo $playground;
?>