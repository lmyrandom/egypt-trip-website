/**
 * FlightCard Component
 * Design: Luxury Egyptian Mystery - elegant flight information display
 */

import { motion } from "framer-motion";
import { Plane, Clock, MapPin } from "lucide-react";

interface FlightInfo {
  number: string;
  airline: string;
  departure: {
    city: string;
    code: string;
    time: string;
    date: string;
  };
  arrival: {
    city: string;
    code: string;
    time: string;
    date: string;
  };
  duration: string;
  aircraft?: string;
}

interface FlightCardProps {
  flight: FlightInfo;
  index?: number;
}

export default function FlightCard({ flight, index = 0 }: FlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-6 mb-4"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-accent/30 rounded-lg">
            <Plane className="w-5 h-5 text-accent" />
          </div>
          <div>
            <div className="text-sm text-muted-foreground">{flight.airline}</div>
            <div className="text-lg font-bold text-accent">{flight.number}</div>
          </div>
        </div>
        {flight.aircraft && (
          <div className="text-xs text-muted-foreground bg-primary/20 px-3 py-1 rounded-full">
            {flight.aircraft}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Departure */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>出发地</span>
          </div>
          <div className="text-2xl font-bold text-accent">{flight.departure.code}</div>
          <div className="text-foreground font-semibold">{flight.departure.city}</div>
          <div className="text-lg text-accent font-bold">{flight.departure.time}</div>
          <div className="text-xs text-muted-foreground">{flight.departure.date}</div>
        </div>

        {/* Duration */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>飞行时长</span>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-accent">{flight.duration}</div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 my-3" />
            <Plane className="w-6 h-6 text-accent mx-auto" />
          </div>
        </div>

        {/* Arrival */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>到达地</span>
          </div>
          <div className="text-2xl font-bold text-accent">{flight.arrival.code}</div>
          <div className="text-foreground font-semibold">{flight.arrival.city}</div>
          <div className="text-lg text-accent font-bold">{flight.arrival.time}</div>
          <div className="text-xs text-muted-foreground">{flight.arrival.date}</div>
        </div>
      </div>
    </motion.div>
  );
}
