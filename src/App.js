import "./styles.css";
function studentRow(studentInfo) {
  return (
    <div className="classTable">
      <div className="header">
        <span>{studentInfo[0]}</span>
        <span>{studentInfo[1]}</span>
        <snap>{studentInfo[2]}</snap>
        <snap>{studentInfo[3]}</snap>
        <snap>{studentInfo[4]}</snap>
        <snap>{studentInfo[5]}</snap>
        <snap>{studentInfo[6]}</snap>
        <snap>{studentInfo[7]}</snap>
        <snap>{studentInfo[8]}</snap>
      </div>
    </div>
  );
}
let studentData = [
  [
    "Mikkail ",
    "Allen ",
    "He/His ",
    "Williamsburg Charter High School ",
    "2022 ",
    "Blue ",
    "Tiktok ",
    "Dogs ",
    "yes"
  ],
  [
    "Justin ",
    "Apupalo ",
    "He/His ",
    "NYIT ",
    "2025 ",
    "Blue ",
    "Insta ",
    "Rooster ",
    "si"
  ],
  [
    "Christopher ",
    "Bonifacio ",
    "He/His ",
    "OCA ",
    "2022 ",
    "Blue ",
    "Insta ",
    "Fish ",
    "Chris"
  ],
  [
    "Angel ",
    "Campoverde ",
    "He/His ",
    "Cristo Rey High School ",
    "2022 ",
    "Purple ",
    "Insta ",
    "Dogs "
  ]
];

export default function App() {
  let personRows = studentData.map(studentRow);
  return <div> {personRows}</div>;
}
