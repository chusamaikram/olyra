import { create } from "zustand"
import { persist } from "zustand/middleware"

import { HeightIcon, WeightIcon, GripIcon, BloodPressure, Weist, Glucose, HeartRate, Wind, Depression, Anxiety, Exercise, Smoking, Alchohol, Sleep, Diet, Pain } from "@/assets/FunctionalMarkerIcons"

export type Marker = {
  id: string
  title: string
  value: number | null
  unit?: string
  desc: string
  category: "functional" | "lifestyle"

}

type MarkerStore = {
  markers: Marker[]
  selectedMarker: string | null
  setSelectedMarker: (id: string | null) => void
  updateMarker: (id: string, value: number) => void
}

export const useMarkerStore = create<MarkerStore>()(
  persist(
    (set) => ({
      markers: [

        // Functional Markers
        {
          id: "height",
          title: "Height",
          value: 68,
          unit: "cm",
          desc: "Current height measurement",
          category: "functional",
        },
        {
          id: "weight",
          title: "Weight",
          value: 5.2,
          unit: "kg",
          desc: "Within healthy range for height",
          category: "functional",
        },
        {
          id: "gripStrength",
          title: "Grip Strength",
          value: 20,
          unit: "kg",
          desc: "Hand grip strength measurement",
          category: "functional",
        },
        {
          id: "bloodPressure",
          title: "Blood Pressure",
          value: 120,
          unit: "mmHg",
          desc: "Systolic/Diastolic reading",
          category: "functional",
        },
        {
          id: "waist",
          title: "Waist Circumference",
          value: 68,
          unit: "cm",
          desc: "Waist measurement at navel level",
          category: "functional",
        },
        {
          id: "glucose",
          title: "Glucose Level",
          value: 96,
          unit: "mg/dL",
          desc: "Fasting blood glucose",
          category: "functional",
        },
        {
          id: "heartRate",
          title: "Heart Rate",
          value: 68,
          unit: "bpm",
          desc: "Resting heart rate",
          category: "functional",
        },
        {
          id: "vo2max",
          title: "VO2 Max",
          value: 5.2,
          unit: "ml/kg/min",
          desc: "Estimated aerobic capacity",
          category: "functional",
        },

        // Lifestyle Markers
        {
          id: "depression",
          title: "Depression Score",
          value: null,
          desc: "PHQ-2 screening for depression",
          category: "lifestyle",
        },
        {
          id: "anxiety",
          title: "Anxiety Score",
          value: null,
          desc: "GAD-7 anxiety screening",
          category: "lifestyle",
        },
        {
          id: "exercise",
          title: "Exercise Score",
          value: null,
          desc: "IPAQ physical activity assessment",
          category: "lifestyle",
        },
        {
          id: "wellbeing",
          title: "Wellbeing Score",
          value: null,
          desc: "WHO-5 wellbeing index",
          category: "lifestyle",
        },
        {
          id: "smoking",
          title: "Smoking Score",
          value: null,
          desc: "Fagerstrom nicotine dependence test",
          category: "lifestyle",
        },
        {
          id: "alcohol",
          title: "Alcohol Score",
          value: null,
          desc: "AUDIT-C alcohol use screening",
          category: "lifestyle",
        },
        {
          id: "sleep",
          title: "Sleep Score",
          value: null,
          desc: "Insomnia severity index",
          category: "lifestyle",
        },
        {
          id: "diet",
          title: "Diet Score",
          value: null,
          desc: "Mediterranean diet adherence",
          category: "lifestyle",
        },
        {
          id: "pain",
          title: "Pain Score",
          value: null,
          desc: "PEG 3-item pain scale",
          category: "lifestyle",
        },
      ],

      selectedMarker: null,

      setSelectedMarker: (id) => set({ selectedMarker: id }),

      updateMarker: (id, value) =>
        set((state) => ({
          markers: state.markers.map((marker) =>
            marker.id === id ? { ...marker, value } : marker
          ),
        })),
    }),
    {
      name: "marker-storage",
      merge: (persistedState: any, currentState: MarkerStore) => {
        if (!persistedState) return currentState
        return {
          ...currentState,
          markers: currentState.markers.map(defaultMarker => {
            const persistedMarker = persistedState.markers?.find((m: Marker) => m.id === defaultMarker.id)
            return persistedMarker ? { ...defaultMarker, value: persistedMarker.value } : defaultMarker
          })
        }
      }
    }
  )
)