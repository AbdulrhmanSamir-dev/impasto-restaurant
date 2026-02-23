import React from 'react';

const GoogleMapEmbed = () => (
  <div className="map-responsive">
    <iframe
      title="Impasto Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.9273372981093!2d30.992394815117123!3d30.814992331658097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145851a839593e5d%3A0x12bfd147c382a95f!2z2LFZhNi52KzZiNmG2KfYt9mK2YQg2LHYqti32LHZitin2YbYqtiMINmE2LnYstiMINin2YTYjNiqINin2YTYqtmE!5e0!3m2!1sar!2seg!4v1685706093455!5m2!1sar!2seg"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default GoogleMapEmbed;