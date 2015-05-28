<?php
/**
 * Helper Class for Turning Cube
 * 
 * @license        GNU/GPL, see LICENSE.php
 * mod_turning_cube is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 */
class modturningcubeHelper
{
    /**
     * Displays the Canvas
     *
     * @param array $params An object containing the module parameters
     * @access public
     */    
    //public static function getPlayground( $params )
    public static function getPlayground( $playgroundwidth, $playgroundheight )
    {
//        return '<div id="playground" style="width:' . $playgroundwidth . '%; height:'. $playgroundheight . 'px;"><canvas id="canvas" ></canvas></div>';
        $html = '<p>Rotating cube - Click on canvas to rotate</p>';
        $html = $html . '<p>Example with d3.js data binding</p>';
        $html = $html . '<div id = "MyCanvas" style="position: relative; left: 50px; top: 50px; width:600px; height:500px; opacity: 0.9;"></div>';
        return $html;
    }

}
?>
