import _ from 'lodash'
function component (){
    // lodash,currently included via script ,is required for this line to work
//    now lodash imported by this script
    element.innerHTML=_.join(['Hello','webpack'],' ');
    return element ;
}
document.body.appendChild(component());