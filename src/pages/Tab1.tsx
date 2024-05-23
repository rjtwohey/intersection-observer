import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';


const Tab1: React.FC = () => {
  const contentRef = useRef(null);


  const { ref, inView } = useInView({
    root: contentRef.current,
    rootMargin: '0px 0px -50px 0px', // Customize this as needed
    threshold: 0.1,
  });


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Intersection Observer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen ref={contentRef}>
        <div style={{ height: '150vh' }}>Scroll down to see the effect</div>
        <div ref={ref} style={{ height: '100px', backgroundColor: inView ? 'green' : 'red' }}>
          {inView ? 'In View' : 'Out of View'}
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;