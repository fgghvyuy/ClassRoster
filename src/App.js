import "./styles.css";

let studentBackground = [
  {
    firstName: "Mikkail ",
    lastName: "Allen ",
    prononce: "He/His ",
    school: "Williamsburg Charter High School ",
    graduationYear: "2022 ",
    favoriteColor: "Blue ",
    socialMedia: "Tiktok ",
    favoriteAnimal: "Dogs ",
    nickName: "yes"
  },
  {
    firstName: "Justin ",
    lastName: "Apupalo ",
    prononce: "He/His ",
    school: "NYIT",
    graduationYear: "2025 ",
    favoriteColor: "Blue ",
    socialMedia: "Insta ",
    favoriteAnimal: "Rooster ",
    nickName: "si"
  },
  {
    firstName: "Christopher ",
    lastName: "Bonifacio ",
    prononce: "He/His ",
    school: "OCA ",
    graduationYear: "2022 ",
    favoriteColor: "Blue ",
    socialMedia: "Insta ",
    favoriteAnimal: "Fish ",
    nickName: "Chris"
  },
  {
    firstName: "Angel ",
    lastName: "Campoverde ",
    prononce: "He/His ",
    school: "Cristo Rey High School ",
    graduationYear: "2022 ",
    favoriteColor: "Purple ",
    socialMedia: "Insta ",
    favoriteAnimal: "Dogs ",
    nickName: "N/A"
  }
];
function studentRow(studentInfo) {
  return (
    <div className="classTable">
      <div className="header">
        <span>{studentInfo.firstName}</span>
        <span>{studentInfo.lastName}</span>
        <snap>{studentInfo.prononce}</snap>
        <snap>{studentInfo.school}</snap>
        <snap>{studentInfo.graduationYear}</snap>
        <snap class="color">{studentInfo.favoriteColor}</snap>
        <snap>{studentInfo.socialMedia}</snap>
        <snap>{studentInfo.favoriteAnimal}</snap>
        <snap>{studentInfo.nickName}</snap>
      </div>
    </div>
  );
}

export default function App() {
  let personRows = studentBackground.map(studentRow);
  return <div> {personRows}</div>;
}
