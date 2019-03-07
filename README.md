# lightning-getMapValue
This component used for dynamically getting values from map by key.

Example of using this component:

```
<c:getMapValue map="{!v.map}" key="{!v.key}" var="value" aura:id="getMapValue">

        {!value}

</c:getMapValue>
```

This component has handlers that checks if map or key was changed and reloads value for specific map.

###  Attention!!! When you change value, received from map by key, it won't change value in map. You should do it manualy. 
