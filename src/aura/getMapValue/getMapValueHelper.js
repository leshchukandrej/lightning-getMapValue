/**
 * Created by Andrii Leshchuk on 07.03.2019.
 */
({

    getMapValue: function (component) {
        let map = component.get('v.map');
        let key = component.get('v.key');

        if (map && key) {
            component.set('v.returnValues', [component.getReference('v.map[' + key + ']')]);
        } else {
            component.set('v.returnValues', []);
        }
    },

})