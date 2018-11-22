import React from 'react';
import SeedInput from '../components/SeedInput';
import AvatarPreview from '../components/AvatarPreview';

class SeedDetailsScreen extends React.Component {
  render() {
    const seed = this.props;
    return (
      <div>
        <AvatarPreview seed={seed} />
        <SeedInput seed={seed} />
      </div>
    );
  }
}
