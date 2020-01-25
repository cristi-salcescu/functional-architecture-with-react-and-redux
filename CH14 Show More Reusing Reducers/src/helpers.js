import { bindActionCreators } from 'redux';

function nameReducer(reducer, reducerName) {
    return function newReducer(state, action){
      let name;
      if(action && action.meta){
          name = action.meta.name
      }  
      const isInitialization = state === undefined

      if (name !== reducerName && !isInitialization) return state
  
      return reducer(state, action);
    }
}

function nameAction(actionCreator, name){
    return function newActionCreator(){
        let actionDto = actionCreator();
        actionDto.meta = { name };
        return actionDto;
    }
}

function nameActions(actionCreatorsMap){
    return function mapDispatchToProps(dispatch, {name}) {
        const map = {}; 
        Object.keys(actionCreatorsMap).forEach(function(actionName){     
            const actionCreator = actionCreatorsMap[actionName];     
            map[actionName] = nameAction(actionCreator, name);
        });
        return bindActionCreators(map, dispatch)
    }
}

export { nameReducer, nameAction, nameActions };