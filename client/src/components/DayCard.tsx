/**
 * DayCard Component - Luxury Egyptian Mystery Edition
 * Design: Deep blacks, golds, and mysterious lighting
 * Displays daily itinerary with flights, images, and descriptions
 */

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import FlightCard from "./FlightCard";
import ImageCarousel from "./ImageCarousel";

interface Activity {
  name: string;
  description: string;
  image?: string;
  images?: string[];
}

interface Hotel {
  name: string;
  description: string;
  image?: string;
}

interface Flight {
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

interface DayCardProps {
  day: number;
  date: string;
  title: string;
  description: string;
  activities?: Activity[];
  hotel?: Hotel;
  flights?: Flight[];
  transport?: string;
  images?: string[];
  index: number;
}

export default function DayCard({
  day,
  date,
  title,
  description,
  activities = [],
  hotel,
  flights = [],
  transport,
  images = [],
  index
}: DayCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 sm:gap-6 md:gap-8 items-stretch mb-12 sm:mb-16 md:mb-24`}
    >
      {/* Day number badge - luxury gold styling */}
      <div className="flex-shrink-0 flex items-center justify-center md:items-start">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-lg bg-gradient-to-br from-accent via-primary to-accent flex items-center justify-center shadow-2xl border border-accent/50"
        >
          <div className="text-center">
            <div className="text-xs sm:text-sm md:text-base font-semibold text-primary-foreground tracking-widest">DAY</div>
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent-foreground">{day}</div>
          </div>
        </motion.div>
      </div>

      {/* Content card - luxury dark styling */}
      <Card className="flex-1 p-4 sm:p-6 md:p-8 shadow-2xl bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg">
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Header */}
          <div className="border-b border-primary/20 pb-3 sm:pb-4">
            <div className="text-xs text-accent uppercase tracking-widest font-semibold mb-2">{date}</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">{title}</h2>
            <p className="text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">{description}</p>
          </div>

          {/* Flights */}
          {flights.length > 0 && (
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-accent uppercase tracking-wide">✏️ 航班信息</h3>
              {flights.map((flight, idx) => (
                <FlightCard key={idx} flight={flight} index={idx} />
              ))}
            </div>
          )}

          {/* Transport info */}
          {transport && (
            <div className="bg-primary/20 rounded-lg p-3 sm:p-4 border-l-4 border-accent">
              <p className="text-xs sm:text-sm font-medium text-foreground flex items-center gap-2">
                <span className="text-base sm:text-lg flex-shrink-0">🚗</span>
                <span>{transport}</span>
              </p>
            </div>
          )}

          {/* Images grid */}
          {images.length > 0 && (
            <div className={`grid gap-2 sm:gap-3 md:gap-4 ${images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3] border border-primary/20 touch-none"
                >
                  <img
                    src={img}
                    alt={`${title} - Image ${idx + 1}`}
                    className="w-full h-full object-cover" loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          )}

          {/* Activities */}
          {activities.length > 0 && (
            <div className="space-y-5 pt-4">
              <h3 className="text-lg font-semibold text-accent uppercase tracking-wide">🏛️ 活动安排</h3>
              {activities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-2 bg-primary/10 p-4 rounded-lg border border-primary/20"
                >
                  <h3 className="text-lg font-semibold text-accent flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {activity.name}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">{activity.description}</p>
                  {(activity.images && activity.images.length > 0) ? (
                    <div className="mt-3">
                      <ImageCarousel images={activity.images} title={activity.name} />
                    </div>
                  ) : activity.image ? (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="mt-3"
                    >
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-full rounded-lg shadow-md border border-primary/20"
                      />
                    </motion.div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          )}

          {/* Hotel info */}
          {hotel && (
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg p-6 space-y-3 border border-accent/30">
              <h3 className="text-xl font-semibold text-accent flex items-center gap-2 uppercase tracking-wide">
                <span className="text-2xl">🏨</span>
                {hotel.name}
              </h3>
              <p className="text-foreground/80 leading-relaxed">{hotel.description}</p>
              {hotel.image && (
                <motion.div whileHover={{ scale: 1.02 }}>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full rounded-lg shadow-md border border-primary/20"
                  />
                </motion.div>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
