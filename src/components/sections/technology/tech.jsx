import { Card } from '../../ui';
import { LightBeamIcon, ShieldIcon } from '../../../assets/icons';

export function TechBenefits() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 page-screen">
      <h2 className="lumen-h2 text-center mb-12">Why Choose Optical LiFi Technology?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <LightBeamIcon className="w-12 h-12 text-[#E35325] mb-4" />
          <h3 className="lumen-h3 mb-2">1,000x More Bandwidth</h3>
          <p className="lumen-body-sm">The light spectrum offers exponentially greater deployment capacity than hyper-congested Radio Frequency channels.</p>
        </Card>
        <Card>
          <ShieldIcon className="w-12 h-12 text-[#E35325] mb-4" />
          <h3 className="lumen-h3 mb-2">Inherent Physical Security</h3>
          <p className="lumen-body-sm">Light cannot pass through structural walls, restricting dynamic interception capabilities to absolute line-of-sight spaces.</p>
        </Card>
      </div>
    </section>
  );
}