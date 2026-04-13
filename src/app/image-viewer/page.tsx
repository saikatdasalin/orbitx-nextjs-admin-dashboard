"use client";

import { Image, ZoomIn, ZoomOut, RotateCw, Download, ChevronLeft, ChevronRight, X, Grid } from "lucide-react";
import { useState } from "react";

const sampleImages = [
  { id: 1, src: "https://picsum.photos/800/600?random=1", title: "Mountain Landscape" },
  { id: 2, src: "https://picsum.photos/800/600?random=2", title: "Ocean Sunset" },
  { id: 3, src: "https://picsum.photos/800/600?random=3", title: "City Skyline" },
  { id: 4, src: "https://picsum.photos/800/600?random=4", title: "Forest Path" },
  { id: 5, src: "https://picsum.photos/800/600?random=5", title: "Desert Dunes" },
  { id: 6, src: "https://picsum.photos/800/600?random=6", title: "Snowy Peaks" },
];

export default function ImageViewerPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? sampleImages.length - 1 : selectedImage - 1);
      setZoom(100);
      setRotation(0);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === sampleImages.length - 1 ? 0 : selectedImage + 1);
      setZoom(100);
      setRotation(0);
    }
  };

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Image Viewer</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">Browse and view your images</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Grid className="h-5 w-5" />
            Gallery View
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sampleImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-video bg-muted rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image className="h-12 w-12 text-muted-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-white font-medium">{sampleImages[selectedImage].title}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom(Math.max(50, zoom - 25))}
                  className="p-2 text-white/70 hover:text-white hover:bg-card/10 rounded-lg transition-colors"
                >
                  <ZoomOut className="h-5 w-5" />
                </button>
                <span className="text-white/70 text-sm w-16 text-center">{zoom}%</span>
                <button
                  onClick={() => setZoom(Math.min(200, zoom + 25))}
                  className="p-2 text-white/70 hover:text-white hover:bg-card/10 rounded-lg transition-colors"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setRotation((rotation + 90) % 360)}
                  className="p-2 text-white/70 hover:text-white hover:bg-card/10 rounded-lg transition-colors"
                >
                  <RotateCw className="h-5 w-5" />
                </button>
                <button className="p-2 text-white/70 hover:text-white hover:bg-card/10 rounded-lg transition-colors">
                  <Download className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    setSelectedImage(null);
                    setZoom(100);
                    setRotation(0);
                  }}
                  className="p-2 text-white/70 hover:text-white hover:bg-card/10 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center relative">
              <button
                onClick={handlePrev}
                className="absolute left-4 p-3 bg-card/10 hover:bg-card/20 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div
                className="flex items-center justify-center"
                style={{
                  transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="w-[600px] h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
                  <Image className="h-24 w-24 text-muted-foreground" />
                </div>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-4 p-3 bg-card/10 hover:bg-card/20 rounded-full text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex justify-center gap-2">
                {sampleImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index);
                      setZoom(100);
                      setRotation(0);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === selectedImage ? "bg-card" : "bg-card/30 hover:bg-card/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
