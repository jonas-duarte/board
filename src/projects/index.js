const Projects = [...Array(15).keys()].map((k, i) => ({
  label: `TABLE ${i}`,
  description: `The table ${i} is a great component to show data`,
  component: (
    <table style={{ border: "1px solid black" }}>
      <thead>
        <tr>
          <th>dasdasdas {i}</th>
          <th>dasdasdas {i}</th>
          <th>dasdasdas {i}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ADKADKS {i}</td>
          <td>ADKADKS {i}</td>
          <td>ADKADKS {i}</td>
        </tr>
        <tr>
          <td>ADKADKS {i}</td>
          <td>ADKADKS {i}</td>
          <td>ADKADKS {i}</td>
        </tr>
        <tr>
          <td>ADKADKS {i}</td>
          <td>ADKADKS {i}</td>
          <td>ADKADKS {i}</td>
        </tr>
      </tbody>
    </table>
  ),
}));
export default Projects;
