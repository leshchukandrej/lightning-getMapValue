/**
 * Created by Andrii Leshchuk on 07.03.2019.
 */
({

    getMapValue: function (component) {
        let map = component.get('v.map');
        let key = component.get('v.key');

        let oldValue = component.get('v.returnValues[0]');
        let value = this.fetchValue(map, key);
        
        if (JSON.stringify(value) != JSON.stringify(oldValue)) {
            component.set('v.returnValues', []);
        }
    },

    fetchValue: function (map, key) {
        let value;
        if (map && key) {
            if (map instanceof Map) {
                value = map.get(key);
            } else {
                value = map[key];
            }
        }
        return value;
    }

})