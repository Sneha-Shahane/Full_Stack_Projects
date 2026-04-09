const MapSection = () => (
  <section className="w-full h-[400px] relative">
    <iframe
      title="Office Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1839!2d-73.9712!3d40.7648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fecf664df5%3A0x33d224a0750dac76!2sFifth%20Avenue%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
      className="w-full h-full border-0 grayscale contrast-110"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>
);

export default MapSection;
