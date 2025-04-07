// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Sparkles, Brain, X } from 'lucide-react';
// // import { getBarSuggestions } from '../lib/gemini';
// // import { CustomBar } from '../types';

// // interface AISuggestionsProps {
// //   customBar: CustomBar;
// //   setCustomBar: React.Dispatch<React.SetStateAction<CustomBar>>;
// // }

// // const AISuggestions: React.FC<AISuggestionsProps> = ({ customBar, setCustomBar }) => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [loading, setLoading] = useState(false);
// //   const [suggestions, setSuggestions] = useState<any>(null);
// //   const [preferences, setPreferences] = useState({
// //     dietary: [] as string[],
// //     goals: [] as string[],
// //     flavors: [] as string[],
// //   });

// //   const dietaryOptions = ['Vegan', 'Gluten-Free', 'Keto', 'Low-Sugar'];
// //   const goalOptions = ['Muscle Gain', 'Weight Loss', 'Energy Boost', 'Recovery'];
// //   const flavorOptions = ['Chocolate', 'Fruity', 'Nutty', 'Vanilla'];

// //   const togglePreference = (category: keyof typeof preferences, value: string) => {
// //     setPreferences(prev => ({
// //       ...prev,
// //       [category]: prev[category].includes(value)
// //         ? prev[category].filter(v => v !== value)
// //         : [...prev[category], value],
// //     }));
// //   };

// //   const getSuggestions = async () => {
// //     setLoading(true);
// //     try {
// //       const result = await getBarSuggestions(preferences);
// //       setSuggestions(result);
// //     } catch (error) {
// //       console.error('Error getting suggestions:', error);
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <>
// //       <button
// //         onClick={() => setIsOpen(true)}
// //         className="fixed bottom-6 right-6 bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-colors"
// //       >
// //         <Brain className="w-6 h-6" />
// //       </button>

// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: 20 }}
// //             className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
// //           >
// //             <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
// //               <div className="p-6 space-y-6">
// //                 <div className="flex justify-between items-center">
// //                   <h2 className="text-2xl font-bold text-gray-900 flex items-center">
// //                     <Sparkles className="w-6 h-6 text-primary-500 mr-2" />
// //                     AI Bar Designer
// //                   </h2>
// //                   <button
// //                     onClick={() => setIsOpen(false)}
// //                     className="text-gray-500 hover:text-gray-700"
// //                   >
// //                     <X className="w-6 h-6" />
// //                   </button>
// //                 </div>

// //                 <div className="space-y-4">
// //                   <div>
// //                     <h3 className="text-lg font-medium mb-2">Dietary Preferences</h3>
// //                     <div className="flex flex-wrap gap-2">
// //                       {dietaryOptions.map(option => (
// //                         <button
// //                           key={option}
// //                           onClick={() => togglePreference('dietary', option)}
// //                           className={`px-4 py-2 rounded-full text-sm ${
// //                             preferences.dietary.includes(option)
// //                               ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
// //                               : 'bg-gray-100 text-gray-700 border-2 border-transparent'
// //                           }`}
// //                         >
// //                           {option}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <h3 className="text-lg font-medium mb-2">Fitness Goals</h3>
// //                     <div className="flex flex-wrap gap-2">
// //                       {goalOptions.map(option => (
// //                         <button
// //                           key={option}
// //                           onClick={() => togglePreference('goals', option)}
// //                           className={`px-4 py-2 rounded-full text-sm ${
// //                             preferences.goals.includes(option)
// //                               ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
// //                               : 'bg-gray-100 text-gray-700 border-2 border-transparent'
// //                           }`}
// //                         >
// //                           {option}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <h3 className="text-lg font-medium mb-2">Flavor Preferences</h3>
// //                     <div className="flex flex-wrap gap-2">
// //                       {flavorOptions.map(option => (
// //                         <button
// //                           key={option}
// //                           onClick={() => togglePreference('flavors', option)}
// //                           className={`px-4 py-2 rounded-full text-sm ${
// //                             preferences.flavors.includes(option)
// //                               ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
// //                               : 'bg-gray-100 text-gray-700 border-2 border-transparent'
// //                           }`}
// //                         >
// //                           {option}
// //                         </button>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <button
// //                   onClick={getSuggestions}
// //                   disabled={loading}
// //                   className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-300"
// //                 >
// //                   {loading ? 'Getting Suggestions...' : 'Get AI Suggestions'}
// //                 </button>

// //                 {suggestions && (
// //                   <div className="mt-6 space-y-4 bg-gray-50 rounded-xl p-6">
// //                     <h3 className="text-xl font-semibold">AI Recommendations</h3>
// //                     <div className="space-y-3">
// //                       <div>
// //                         <span className="font-medium">Recommended Base:</span>
// //                         <p className="text-gray-700">{suggestions.base}</p>
// //                       </div>
// //                       <div>
// //                         <span className="font-medium">Power Ingredients:</span>
// //                         <ul className="list-disc list-inside text-gray-700">
// //                           {suggestions.ingredients.map((ingredient: string) => (
// //                             <li key={ingredient}>{ingredient}</li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                       <div>
// //                         <span className="font-medium">Sweeteners:</span>
// //                         <ul className="list-disc list-inside text-gray-700">
// //                           {suggestions.sweeteners.map((sweetener: string) => (
// //                             <li key={sweetener}>{sweetener}</li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                       <div>
// //                         <span className="font-medium">Expected Benefits:</span>
// //                         <p className="text-gray-700">{suggestions.benefits}</p>
// //                       </div>
// //                       <div>
// //                         <span className="font-medium">Flavor Rating:</span>
// //                         <p className="text-gray-700">{suggestions.flavorRating}/10</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </>
// //   );
// // };

// // export default AISuggestions;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sparkles, X } from 'lucide-react';
// import { getBarSuggestions } from '../lib/gemini';
// import { CustomBar } from '../types';
// import AnimatedLogo from './AnimatedLogo';

// interface AISuggestionsProps {
//   customBar: CustomBar;
//   setCustomBar: React.Dispatch<React.SetStateAction<CustomBar>>;
// }

// const AISuggestions: React.FC<AISuggestionsProps> = ({ customBar, setCustomBar }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [suggestions, setSuggestions] = useState<any>(null);
//   const [preferences, setPreferences] = useState({
//     dietary: [] as string[],
//     goals: [] as string[],
//     flavors: [] as string[],
//   });

//   const dietaryOptions = ['Vegan', 'Gluten-Free', 'Keto', 'Low-Sugar'];
//   const goalOptions = ['Muscle Gain', 'Weight Loss', 'Energy Boost', 'Recovery'];
//   const flavorOptions = ['Chocolate', 'Fruity', 'Nutty', 'Vanilla'];

//   const togglePreference = (category: keyof typeof preferences, value: string) => {
//     setPreferences(prev => ({
//       ...prev,
//       [category]: prev[category].includes(value)
//         ? prev[category].filter(v => v !== value)
//         : [...prev[category], value],
//     }));
//   };

//   const getSuggestions = async () => {
//     setLoading(true);
//     try {
//       const result = await getBarSuggestions(preferences);
//       setSuggestions(result);
//     } catch (error) {
//       console.error('Error getting suggestions:', error);
//     }
//     setLoading(false);
//   };

//   const applySuggestions = () => {
//     if (suggestions) {
//       // Implement logic to apply suggestions to customBar
//       // This was missing in the original code
//       setCustomBar(prev => ({
//         ...prev,
//         // Update with suggestion values
//         // This is a placeholder - update with actual mapping based on your CustomBar type
//       }));
//       setIsOpen(false);
//     }
//   };

//   return (
//     <>
//       <div className="fixed bottom-6 left-0 right-0 flex justify-center">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-colors"
//           aria-label="Open AI suggestions"
//         >
//           {/* <Brain className="w-6 h-6" /> */}
//           <AnimatedLogo />
//         </button>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
//             onClick={(e) => {
//               // Close modal when clicking outside
//               if (e.target === e.currentTarget) setIsOpen(false);
//             }}
//           >
//             <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
//               <div className="p-6 space-y-6">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-2xl font-bold text-gray-900 flex items-center">
//                     <Sparkles className="w-6 h-6 text-primary-500 mr-2" />
//                     AI Bar Designer
//                   </h2>
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     className="text-gray-500 hover:text-gray-700"
//                     aria-label="Close"
//                   >
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="text-lg font-medium mb-2">Dietary Preferences</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {dietaryOptions.map(option => (
//                         <button
//                           key={option}
//                           onClick={() => togglePreference('dietary', option)}
//                           className={`px-4 py-2 rounded-full text-sm ${
//                             preferences.dietary.includes(option)
//                               ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
//                               : 'bg-gray-100 text-gray-700 border-2 border-transparent'
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-medium mb-2">Fitness Goals</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {goalOptions.map(option => (
//                         <button
//                           key={option}
//                           onClick={() => togglePreference('goals', option)}
//                           className={`px-4 py-2 rounded-full text-sm ${
//                             preferences.goals.includes(option)
//                               ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
//                               : 'bg-gray-100 text-gray-700 border-2 border-transparent'
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="text-lg font-medium mb-2">Flavor Preferences</h3>
//                     <div className="flex flex-wrap gap-2">
//                       {flavorOptions.map(option => (
//                         <button
//                           key={option}
//                           onClick={() => togglePreference('flavors', option)}
//                           className={`px-4 py-2 rounded-full text-sm ${
//                             preferences.flavors.includes(option)
//                               ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
//                               : 'bg-gray-100 text-gray-700 border-2 border-transparent'
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   onClick={getSuggestions}
//                   disabled={loading}
//                   className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-300"
//                 >
//                   {loading ? 'Getting Suggestions...' : 'Get AI Suggestions'}
//                 </button>

//                 {suggestions && (
//                   <div className="mt-6 space-y-4 bg-gray-50 rounded-xl p-6">
//                     <h3 className="text-xl font-semibold">AI Recommendations</h3>
//                     <div className="space-y-3">
//                       <div>
//                         <span className="font-medium">Recommended Base:</span>
//                         <p className="text-gray-700">{suggestions.base}</p>
//                       </div>
//                       <div>
//                         <span className="font-medium">Power Ingredients:</span>
//                         <ul className="list-disc list-inside text-gray-700">
//                           {suggestions.ingredients.map((ingredient: string, index: number) => (
//                             <li key={`ingredient-${index}`}>{ingredient}</li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div>
//                         <span className="font-medium">Sweeteners:</span>
//                         <ul className="list-disc list-inside text-gray-700">
//                           {suggestions.sweeteners.map((sweetener: string, index: number) => (
//                             <li key={`sweetener-${index}`}>{sweetener}</li>
//                           ))}
//                         </ul>
//                       </div>
//                       <div>
//                         <span className="font-medium">Expected Benefits:</span>
//                         <p className="text-gray-700">{suggestions.benefits}</p>
//                       </div>
//                       <div>
//                         <span className="font-medium">Flavor Rating:</span>
//                         <p className="text-gray-700">{suggestions.flavorRating}/10</p>
//                       </div>
//                     </div>
                    
//                     <button
//                       onClick={applySuggestions}
//                       className="w-full mt-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
//                     >
//                       Apply These Suggestions
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default AISuggestions;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { getBarSuggestions } from '../lib/gemini';
import { CustomBar } from '../types';
import AnimatedLogo from './AnimatedLogo';

interface AISuggestionsProps {
  customBar: CustomBar;
  setCustomBar: React.Dispatch<React.SetStateAction<CustomBar>>;
}

const AISuggestions: React.FC<AISuggestionsProps> = ({ customBar, setCustomBar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any>(null);
  const [preferences, setPreferences] = useState({
    dietary: [] as string[],
    goals: [] as string[],
    flavors: [] as string[],
  });

  const dietaryOptions = ['Vegan', 'Gluten-Free', 'Keto', 'Low-Sugar'];
  const goalOptions = ['Muscle Gain', 'Weight Loss', 'Energy Boost', 'Recovery'];
  const flavorOptions = ['Chocolate', 'Fruity', 'Nutty', 'Vanilla'];

  const togglePreference = (category: keyof typeof preferences, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value],
    }));
  };

  const getSuggestions = async () => {
    setLoading(true);
    try {
      const result = await getBarSuggestions(preferences);
      setSuggestions(result);
    } catch (error) {
      console.error('Error getting suggestions:', error);
    }
    setLoading(false);
  };

  const applySuggestions = () => {
    if (suggestions) {
      // Apply the AI suggestions to the customBar state
      setCustomBar(prev => {
        // Create a new bar object with the suggestions applied
        const updatedBar = { ...prev };
        
        // Update the base if provided in suggestions
        if (suggestions.base) {
          updatedBar.base = suggestions.base;
        }
        
        // Update ingredients from suggestions
        if (suggestions.ingredients && Array.isArray(suggestions.ingredients)) {
          // Clear previous power ingredients and add the suggested ones
          updatedBar.ingredients = suggestions.ingredients.map((ingredient: string) => ({
            name: ingredient,
            quantity: 1, // Default quantity, can be adjusted by user later
            selected: true
          }));
        }
        
        // Update sweeteners from suggestions
        if (suggestions.sweeteners && Array.isArray(suggestions.sweeteners)) {
          updatedBar.sweeteners = suggestions.sweeteners.map((sweetener: string) => ({
            name: sweetener,
            quantity: 1, // Default quantity, can be adjusted by user later
            selected: true
          }));
        }
        
        // If there's nutritional info in the suggestions, we could update that too
        // if (suggestions.benefits) {
        //   updatedBar.nutritionalInfo = suggestions.benefits;
        // }
        
        // // Update flavor profile if it exists in your CustomBar type
        // if (suggestions.flavorRating) {
        //   updatedBar.flavorRating = suggestions.flavorRating;
        // }
        
        return updatedBar;
      });
      
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="flex justify-center pb-2">
        <button
          onClick={() => setIsOpen(true)}
          className="absolute left-1/2 mb-4 transform -translate-x-1/2 translate bottom-0 text-white bg-primary-600 p-4 rounded-full border-8 border-white"
        >
          {/* <Brain className="w-6 h-6" /> */}
          <AnimatedLogo />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={(e) => {
              // Close modal when clicking outside
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[68vh] overflow-y-auto scrollbar-hide">
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Sparkles className="w-6 h-6 text-primary-500 mr-2" />
                    AI Bar Designer
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Dietary Preferences</h3>
                    <div className="flex flex-wrap gap-2">
                      {dietaryOptions.map(option => (
                        <button
                          key={option}
                          onClick={() => togglePreference('dietary', option)}
                          className={`px-4 py-2 rounded-full text-sm ${
                            preferences.dietary.includes(option)
                              ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
                              : 'bg-gray-100 text-gray-700 border-2 border-transparent'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Fitness Goals</h3>
                    <div className="flex flex-wrap gap-2">
                      {goalOptions.map(option => (
                        <button
                          key={option}
                          onClick={() => togglePreference('goals', option)}
                          className={`px-4 py-2 rounded-full text-sm ${
                            preferences.goals.includes(option)
                              ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
                              : 'bg-gray-100 text-gray-700 border-2 border-transparent'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Flavor Preferences</h3>
                    <div className="flex flex-wrap gap-2">
                      {flavorOptions.map(option => (
                        <button
                          key={option}
                          onClick={() => togglePreference('flavors', option)}
                          className={`px-4 py-2 rounded-full text-sm ${
                            preferences.flavors.includes(option)
                              ? 'bg-primary-100 text-primary-700 border-2 border-primary-500'
                              : 'bg-gray-100 text-gray-700 border-2 border-transparent'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={getSuggestions}
                  disabled={loading}
                  className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:bg-gray-300"
                >
                  {loading ? 'Getting Suggestions...' : 'Get AI Suggestions'}
                </button>

                {suggestions && (
                  <div className="mt-6 space-y-4 bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold">AI Recommendations</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium">Recommended Base:</span>
                        <p className="text-gray-700">{suggestions.base}</p>
                      </div>
                      <div>
                        <span className="font-medium">Power Ingredients:</span>
                        <ul className="list-disc list-inside text-gray-700">
                          {suggestions.ingredients.map((ingredient: string, index: number) => (
                            <li key={`ingredient-${index}`}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-medium">Sweeteners:</span>
                        <ul className="list-disc list-inside text-gray-700">
                          {suggestions.sweeteners.map((sweetener: string, index: number) => (
                            <li key={`sweetener-${index}`}>{sweetener}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-medium">Expected Benefits:</span>
                        <p className="text-gray-700">{suggestions.benefits}</p>
                      </div>
                      <div>
                        <span className="font-medium">Flavor Rating:</span>
                        <p className="text-gray-700">{suggestions.flavorRating}/10</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={applySuggestions}
                      className="w-full mt-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Apply These Suggestions
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AISuggestions;