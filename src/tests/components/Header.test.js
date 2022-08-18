//import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import Header from '../../components/Header'
import {shallow} from 'enzyme';
//import toJSON from 'enzyme-to-json'; // No longer needed above as I set it up in jest.config file


//react-test-renderer 

test('Should render header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    //expect(toJSON(wrapper)).toMatchSnapshot(); //// toJSON No longer needed as I set it up in jest.config file
    
    //expect(wrapper.find('h1').length).toBe(1);
    //expect(wrapper.find('h1').text()).toBe('Expensify');

   
});
