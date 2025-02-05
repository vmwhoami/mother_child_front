import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout';
import Doctor from '../component/Doctor';
import Loading from '../component/Loading';
import { selectedDoc, increment, decrement, setIndex, zeroIndex } from '../../redux/doctors/doctorActions';
 

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.doctorReducer);
  const navbar = useSelector((state) => state.registrationReducer.navbar);
  const { loading, doctors, index } = state;
  
  // Memoize derived data to prevent unnecessary recalculations
  const docLength = doctors.slice(0, 4).length;
  const shuffled = [...doctors].sort(() => 0.5 - Math.random()).slice(0, 6);
 
  const selectDoc = (id) => { dispatch(selectedDoc(id)); };
  
 

  useEffect(() => {
    const lastIndex = docLength - 1;
    if (index < 0) {
      dispatch(setIndex(lastIndex));
    }
    
    if (index > lastIndex) {
      dispatch(zeroIndex());
    }
  }, [index, docLength, dispatch]);

  useEffect(() => { const slider = setInterval(() => { dispatch(increment()); }, 90000);
    return () => clearInterval(slider);
  }, [dispatch, index]);

  return (
    <Layout>
      <main className={navbar ? 'container nomargin' : 'container'}>
        <h1>Doctors</h1>
 
        {loading ? <Loading /> : 
        (
          <div className="home">
            <button className="increment" type="button" onClick={() => dispatch(increment())} >
              &#8250;
            </button>
           
            {shuffled.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} selectDoc={selectDoc} docLength={docLength} index={index} />
            ))}
            
            <button className="decrement" type="button" onClick={() => dispatch(decrement())}>
              &#8249;
            </button>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default Home;