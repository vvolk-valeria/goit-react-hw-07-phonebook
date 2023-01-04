
import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from "./Loader.styled";

export const Loader = () => {
    return (
        <Spinner>
          <RotatingLines
            strokeColor="blue"
            strokeWidth="5"
            animationDuration="0.75"
            width="120"
            visible={true}
            />  
        </Spinner>
        )
}