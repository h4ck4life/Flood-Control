/**
 * Contains all the map data to provide information about where the player, the
 * barriers, and waves can go.
 */
var Map = function () {

    /**
     * @property {number} map - The container of all the map data.
     */
    this.map = {};
}

/**
 * Adds the specified map data to the map at the given x and y coordinates.
 * @param {number} x - The x coordinate of the map data.
 * @param {number} y - The y coordinate of the map data.
 * @param {number} data - The data to be set on the map.
 */
Map.prototype.setXY = function (x, y, data) {
    
    /**
     * Set the data as a coordinate attribute of the map.
     */
    this.map[x + ',' + y] = data;
}

/**
 * Returns the map data of the given position. 
 * @param {number} x - The x coordinate of the map data.
 * @param {number} y - The y coordinate of the map data.
 */
Map.prototype.getXY = function (x, y) {
    
    /**
     * Get the data of the specified coordinate attribute of the map.
     */
    return this.map[x + ',' + y];
}