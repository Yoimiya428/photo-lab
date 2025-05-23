// frontend/src/App.jsx
import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `/profile-1.jpg`,
// };



// Note: Rendering a single component to build components in isolation

// const App = () => (
//   <div className="App">
//     <PhotoListItem photo={sampleDataForPhotoListItem} />
//   </div>
// );

const App = () => {
  const photoDataArray = [
    {
      id: "1",
      location: { city: "Montreal", country: "Canada" },
      imageSource: "/Image-1-Regular.jpeg",
      username: "Joe Example",
      profile: "/profile-1.jpg"
    },
    {
      id: "2",
      location: { city: "Toronto", country: "Canada" },
      imageSource: "/Image-2-Regular.jpeg",
      username: "Some One",
      profile: "/profile-1.jpg"
    },
    {
      id: "3",
      location: { city: "Ottawa", country: "Canada" },
      imageSource: "/Image-3-Regular.jpeg",
      username: "Some Two",
      profile: "/profile-1.jpg"
    }
  ]

  return (
    <div className="App">
      {photoDataArray.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
        />
      ))}
    </div>
  );
};



export default App;
