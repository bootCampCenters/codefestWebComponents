/***
 Taken from: https://github.com/ionic-team/ionic-react-conference-app/blob/master/src/utils/stencil.js
 
This function is meant to make it easier to use Props and Custom Events with Custom
Elements in React.
<ion-segment
  value={props.filterFavorites}
  ionChange={(e) => props.updateFavoriteFilter(e.target.value)}
>
</ion-segment>
     <<< SHOULD BE WRITTEN AS >>>
<ion-segment
  value={props.filterFavorites}
  ref={wc({
    ionChange: (e) => props.updateFavoriteFilter(e.target.value)
  })}
>
</ion-segment>
***/

export function wc(customEvents = {}, props = {}) {
    let storedEl;
  
    return function (el) {
      for (let name in customEvents) {
        let value = customEvents[name] ;
        // If we have an element then add event listeners
        // otherwise remove the event listener
        // <marcos.ginel@gmail.com>: When ReactJS reloads the main component, it removes all the children, therefore, there's no webcomponent loaded
        // and we're unable to remove the listener, which means, that we don't need to remove it
        const action = (el) ? el.addEventListener : (storedEl && storedEl.removeEventListener ? storedEl.removeEventListener : null);
        // <marcos.ginel@gmail.com>: When ReactJS reloads the main component, it removes all the children, therefore, there's no webcomponent loaded
        // and we're unable to execute the action (because action can be null as set above)
        if (typeof value === 'function' && action) {
          action(name, value);
          return;
        }
      }
      
      // If we have an element then set props
      if (el) {
        for (let name in props) {
          let value = props[name] ;
          el[name] = value;
        }
      }
      storedEl = el;
    };
  }