
import UniversityLanding from './UniversityLanding/page';
import Page1 from './page1/page';
import SimpleSteps from './SimpleSteps/page';

export default function Home() {


  return (
    <>
    <Page1/>
    {/* <UniversityLanding/> */}
     <div id="university-landing">
        <UniversityLanding/>
      </div>
        <SimpleSteps/>
 
    </>
  );
}