import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Alert {
  id: string;
  type: "line_movement" | "sharp_money" | "injury" | "ev_threshold";
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  relatedPlayer?: string;
  relatedGame?: string;
}

interface AlertsState {
  alerts: Alert[];
}

const initialState: AlertsState = {
  alerts: [
    {
      id: "alert-1",
      type: "line_movement",
      title: "Line Movement: BOS -6.5 → -7.5",
      message: "Celtics spread moved 1 point in last 30 minutes across 3 books.",
      timestamp: "5 min ago",
      read: false,
      relatedGame: "BOS vs CLE",
    },
    {
      id: "alert-2",
      type: "sharp_money",
      title: "Sharp Money: GSW +2.5",
      message: "Large wagers detected on Warriors spread at Pinnacle.",
      timestamp: "12 min ago",
      read: false,
      relatedGame: "GSW vs DEN",
    },
    {
      id: "alert-3",
      type: "injury",
      title: "Injury: Luka Doncic Questionable",
      message: "Doncic listed Questionable with knee soreness. DAL spread shifting.",
      timestamp: "18 min ago",
      read: false,
      relatedPlayer: "Luka Doncic",
    },
    {
      id: "alert-4",
      type: "ev_threshold",
      title: "EV Alert: Curry 3PM Over 4.5 — Edge +9.2%",
      message: "Model edge exceeds 8% threshold. High-confidence play detected.",
      timestamp: "25 min ago",
      read: false,
      relatedPlayer: "Stephen Curry",
    },
    {
      id: "alert-5",
      type: "line_movement",
      title: "Steam Move: DEN -3 → -4.5",
      message: "Coordinated movement across FanDuel, DraftKings, BetMGM.",
      timestamp: "35 min ago",
      read: true,
      relatedGame: "DEN vs BOS",
    },
    {
      id: "alert-6",
      type: "injury",
      title: "Injury Update: Embiid upgraded to Probable",
      message: "Embiid was Questionable, now Probable. PHI spread adjusted.",
      timestamp: "52 min ago",
      read: true,
      relatedPlayer: "Joel Embiid",
    },
  ],
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts.unshift(action.payload);
    },
    markRead: (state, action: PayloadAction<string>) => {
      const alert = state.alerts.find((a) => a.id === action.payload);
      if (alert) alert.read = true;
    },
    markAllRead: (state) => {
      state.alerts.forEach((a) => (a.read = true));
    },
    dismissAlert: (state, action: PayloadAction<string>) => {
      state.alerts = state.alerts.filter((a) => a.id !== action.payload);
    },
  },
});

export const { addAlert, markRead, markAllRead, dismissAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
