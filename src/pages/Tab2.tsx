import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { useInView } from 'react-intersection-observer';
import { ReactElement, useEffect, useRef, useState } from 'react';


const Tab2: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement>(null);
  const [rootMargin, setRootMargin] = useState('0px');


  useEffect(() => {
    if (contentRef.current) {
      const contentBounds = contentRef.current.getBoundingClientRect();
      const margin = `${-contentBounds.top}px ${-contentBounds.right}px ${-contentBounds.bottom}px ${-contentBounds.left}px`;
      setRootMargin(margin);
    }
  }, []);


  const { ref, inView } = useInView({
    root: contentRef.current,
    rootMargin,
    threshold: 0.1,
  });


  return (
    <IonPage>
      <IonContent ref={contentRef}>
        <div style={{ height: '150vh' }}>Scroll down to see the effect</div>
        <div ref={ref} style={{ height: '100px', backgroundColor: inView ? 'green' : 'red' }}>
          {inView ? 'In View' : 'Out of View'}
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Tab2;