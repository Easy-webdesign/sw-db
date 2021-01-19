import React from 'react';
import { SwConsumer } from '../../context';

const withContext = map => Wrapped => props => {

    return <SwConsumer>
            {
                sw => {
                    const methods = map(sw);

                    return <Wrapped {...props} {...methods}/>
                }
            }
        </SwConsumer>
}

export default withContext;