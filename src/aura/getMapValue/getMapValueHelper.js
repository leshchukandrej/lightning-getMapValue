/**
 * Created by Andrii Leshchuk on 07.03.2019.
 */
({

    getMapValue: function (component) {
        let map = component.get('v.map');
        let key = component.get('v.key');

        component.set('v.returnValues', [this.fetchValue(map, key)]);
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