import './SolarSystem.css';

const SolarSystem = () => {
  return (
    <div className="solar-system-background">
      <div className="sun"></div>
      <div className="orbit orbit-mercury">
        <div className="planet mercury"></div>
      </div>
      <div className="orbit orbit-venus">
        <div className="planet venus"></div>
      </div>
      <div className="orbit orbit-earth">
        <div className="planet earth"></div>
      </div>
      <div className="orbit orbit-mars">
        <div className="planet mars"></div>
      </div>
      <div className="orbit orbit-jupiter">
        <div className="planet jupiter"></div>
      </div>
      <div className="orbit orbit-saturn">
        <div className="planet saturn">
          <div className="saturn-ring"></div>
        </div>
      </div>
      <div className="stars"></div>
      <div className="stars stars-2"></div>
      <div className="stars stars-3"></div>
    </div>
  );
};

export default SolarSystem;
