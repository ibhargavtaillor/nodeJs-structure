/**
 * @description Class contain all version routing
 */
class Version {

    /**
     * @description this function contain all version one routing
     */
    v1() {
        console.log(process.env);
    }
}

module.exports = new Version();