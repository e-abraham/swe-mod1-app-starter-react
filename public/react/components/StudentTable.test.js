import React from 'react';
import renderer from 'react-test-renderer';


import { StudentTable } from './StudentTable';
import 'regenerator-runtime/runtime'




// Unit testing StudentTable

describe("Students Table component", () => {
  test("Contains items passed down as props", () => {
    const studentsList = [{"studentId" : 2, "firstName" : "Ben", "lastName" : "Tate", "campus" : "Mars"}, {"studentId" : 5, "firstName" : "Eric", "lastName" : "Taylor", "campus" : "Mars"}];

    const component = renderer.create(<StudentTable students={studentsList}/>);
    const treeEl = component.toTree()

    expect(treeEl.props.students.length).toBe(2)

  })
  
  test("renders Student Table component as expected", () => {
    const studentsList = [{"studentId" : 2, "firstName" : "Ben", "lastName" : "Tate", "campus" : "Mars"}, {"studentId" : 5, "firstName" : "Eric", "lastName" : "Taylor", "campus" : "Mars"}];

    const component = renderer.create(<StudentTable students={studentsList}/>);
    const snapshot = component.toJSON();

    console.log("What does our snapshot look like?  ", snapshot)

    expect(snapshot).toMatchSnapshot();

  })

  test("Invokes function when changed", () => {
    const studentsList = [{"studentId" : 2, "firstName" : "Ben", "lastName" : "Tate", "campus" : "Mars"}, {"studentId" : 5, "firstName" : "Eric", "lastName" : "Taylor", "campus" : "Mars"}];
    
    const stubb = () => "Filter changed";

    const component = renderer.create(<StudentTable students={studentsList} onChange={stubb}/>);
    const treeEl = component.toTree();

    console.log("What does our snapshot look like?  ", treeEl)

    expect(treeEl.props.onChange()).toBe("Filter changed");

  })
})

