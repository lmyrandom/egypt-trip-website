/**
 * DayCard Component
 * Design: Nile River flowing narrative - organic rounded cards with flowing layout
 * Displays daily itinerary with images and descriptions
 */

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Activity {
  name: string;
  description: string;
  image?: string;
}

interface DayCardProps {
  day: number;
  date: string;
  title: string;
  description: string;
  activities?: Activity[];
  hotel?: {
    name: string;
    description: string;
    image?: string;
  };
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
  transport,
  images = [],
  index
}: DayCardProps) {
  // Alternate left and right layout for flowing narrative
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center mb-20`}
    >
      {/* Day number badge */}
      <div className="flex-shrink-0">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-foreground">Day</div>
            <div className="text-4xl md:text-5xl font-bold text-primary-foreground">{day}</div>
          </div>
        </div>
      </div>

      {/* Content card */}
      <Card className="flex-1 p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="text-sm text-muted-foreground mb-2 font-medium">{date}</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">{description}</p>
          </div>

          {/* Transport info */}
          {transport && (
            <div className="bg-secondary/30 rounded-2xl p-4 border-l-4 border-accent">
              <p className="text-sm font-medium text-secondary-foreground flex items-center gap-2">
                <span className="text-lg">🚗</span>
                {transport}
              </p>
            </div>
          )}

          {/* Images grid */}
          {images.length > 0 && (
            <div className={`grid gap-4 ${images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl shadow-md aspect-[4/3]"
                >
                  <img
                    src={img}
                    alt={`${title} - Image ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* Activities */}
          {activities.length > 0 && (
            <div className="space-y-4">
              {activities.map((activity, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <span className="text-accent">•</span>
                    {activity.name}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed pl-6">{activity.description}</p>
                  {activity.image && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="pl-6"
                    >
                      <img
                        src={activity.image}
                        alt={activity.name}
                        className="w-full max-w-md rounded-2xl shadow-md"
                      />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Hotel info */}
          {hotel && (
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <span className="text-2xl">🏨</span>
                {hotel.name}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{hotel.description}</p>
              {hotel.image && (
                <motion.div whileHover={{ scale: 1.02 }}>
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full rounded-xl shadow-md"
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
