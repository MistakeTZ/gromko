import React from 'react';
import { DesktopBookingForm } from './DesktopBookingForm';
import { BookingFormData } from '../../types';

interface MobileBookingFlowProps {
  onSubmitBooking: (formData: BookingFormData) => Promise<void>;
  onClose?: () => void;
  isLoading?: boolean;
}

export const MobileBookingFlow: React.FC<MobileBookingFlowProps> = ({
  onSubmitBooking,
  isLoading = false,
}) => {
  return (
    <div className="w-full">
      <DesktopBookingForm
        onSubmitBooking={onSubmitBooking}
        isLoading={isLoading}
      />
    </div>
  );
};

