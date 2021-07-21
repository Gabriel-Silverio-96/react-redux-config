type TypeProps = 'SUM'

interface ActionsProps {
    type: TypeProps;
    payload: Array<number>
}
// eslint-disable-next-line
export default function (state = 0, actions: ActionsProps) {
    switch (actions.type) {
        case "SUM":            
            return actions.payload[0] + actions.payload[1]
    
        default:
            return state
    }
}