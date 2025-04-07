// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, Menu, Search, ShoppingCart, User } from 'lucide-react';
// import { CustomBar } from './types';
// import StepProgress from './components/StepProgress';
// import BaseSelection from './components/BaseSelection';
// import PowerIngredients from './components/PowerIngredients';
// import SweetenerSelection from './components/SweetenerSelection';
// import NutritionInsight from './components/NutritionInsight';
// import Packaging from './components/Packaging';
// import AISuggestions from './components/AISuggestions';

// const steps = [
//   'Base',
//   'Ingredients',
//   'Sweeteners',
//   'Nutrition',
//   'Package',
// ];

// function App() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [customBar, setCustomBar] = useState<CustomBar>({
//     base: null,
//     ingredients: [],
//     sweeteners: [],
//     name: '',
//     totalNutrition: {
//       protein: 0,
//       carbs: 0,
//       fats: 0,
//       calories: 0,
//     },
//   });

//   const nextStep = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const prevStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 0:
//         return <BaseSelection customBar={customBar} setCustomBar={setCustomBar} />;
//       case 1:
//         return (
//           <PowerIngredients customBar={customBar} setCustomBar={setCustomBar} />
//         );
//       case 2:
//         return (
//           <SweetenerSelection customBar={customBar} setCustomBar={setCustomBar} />
//         );
//       case 3:
//         return <NutritionInsight customBar={customBar} />;
//       case 4:
//         return <Packaging customBar={customBar} setCustomBar={setCustomBar} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 pb-8">
//         <header className="mb-12 fixed top-0 z-50 bg-white">
//           <div className="flex flex-row justify-between items-center lg:px-8">
//             <div className="flex ">
//               <button className="p-2 text-primary-800 transition-colors">
//                 <Menu className="w-6 h-6" />
//               </button>
//             </div>
//             <div className="flex justify-center">
//               <img src="/5.png" alt="Logo" width="200px" />
//             </div>
//             <div className="flex justify-end gap-4">
//               <button className="p-2 text-primary-800 transition-colors">
//                 <Search className="w-6 h-6" />
//               </button>
//               <button className="p-2 text-primary-800 transition-colors">
//                 <User className="w-6 h-6" />
//               </button>
//               <button className="p-2 text-primary-800 transition-colors">
//                 <ShoppingCart className="w-6 h-6" />
//               </button>

//             </div>
//           </div>
//         </header>

//         <StepProgress
//           steps={steps}
//           currentStep={currentStep}
//           onStepClick={setCurrentStep}
//         />

//         <div className="mt-8 relative pb-32">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentStep}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white p-6 md:p-8"
//             >
//               {renderStep()}
//             </motion.div>
//           </AnimatePresence>

//           <div className="flex flex-row justify-between mt-8 fixed bottom-0 w-full ">
//             <button
//               onClick={prevStep}
//               disabled={currentStep === 0}
//               className={`flex items-center px-6 py-3 rounded-lg text-white transition-all h-12 w-32 mt-4 ${currentStep === 0
//                   ? 'bg-secondary-300 cursor-not-allowed'
//                   : 'bg-secondary-600 hover:bg-secondary-700'
//                 }`}
//             >
//               <ChevronLeft className="w-5 h-5 mr-2" />
//               Previous
//             </button>
//             <AISuggestions customBar={customBar} setCustomBar={setCustomBar} />
//             <button
//               onClick={nextStep}
//               disabled={currentStep === steps.length - 1}
//               className={`flex items-center px-6 py-3 rounded-lg text-white transition-all h-12 mr-8 w-32 mt-4 ${currentStep === steps.length - 1
//                   ? 'bg-secondary-300 cursor-not-allowed'
//                   : 'bg-primary-600 hover:bg-primary-700'
//                 }`}
//             >
//               Next
//               <ChevronRight className="w-5 h-5 ml-2" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CustomBar } from './types';
import StepProgress from './components/StepProgress';
import AISuggestions from './components/AISuggestions';
import { stepsConfig } from './stepsConfig';
import Header from './components/Header';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [customBar, setCustomBar] = useState<CustomBar>({
    base: null,
    ingredients: [],
    sweeteners: [],
    name: '',
    totalNutrition: { protein: 0, carbs: 0, fats: 0, calories: 0 },
  });

  const nextStep = () => {
    if (currentStep < stepsConfig.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const CurrentComponent = stepsConfig[currentStep].render;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 pb-8 pt-32">
        <StepProgress
          steps={stepsConfig.map(step => step.name)}
          currentStep={currentStep}
          onStepClick={setCurrentStep}
        />

        <div className="mt-8 relative pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 md:p-8"
            >
              {CurrentComponent(customBar, setCustomBar)}
            </motion.div>
          </AnimatePresence>

          
        </div>
      </div>

      <div className="flex flex-row justify-between mt-8 fixed bottom-0 w-full p-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex items-center px-3 py-3 text-white rounded-full mt-4 transition-all ${currentStep === 0
                ? 'bg-secondary-300 cursor-not-allowed'
                : 'bg-secondary-600 hover:bg-secondary-700'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
      
            </button>
            <div> 
               <AISuggestions customBar={customBar} setCustomBar={setCustomBar} />
            </div>
           

            <button
              onClick={nextStep}
              disabled={currentStep === stepsConfig.length - 1}
              className={`flex items-center px-3 py-3 text-white rounded-full mt-4 transition-all ${currentStep === stepsConfig.length - 1
                ? 'bg-secondary-300 cursor-not-allowed'
                : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
    </div>
  );
}

export default App;
