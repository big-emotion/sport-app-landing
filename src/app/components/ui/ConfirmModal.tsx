'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { JSX } from 'react';
import { Button } from './Button';

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
}: ConfirmModalProps): JSX.Element {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl w-full max-w-md text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Confirmer l'inscription
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Voulez-vous vraiment vous inscrire à la newsletter ?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={onCancel}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                Annuler
              </Button>
              <Button
                onClick={onConfirm}
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
              >
                Confirmer
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
