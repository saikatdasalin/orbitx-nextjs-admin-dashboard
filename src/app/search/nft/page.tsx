"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Search, 
  Filter,
  Heart,
  Clock,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

const nfts = [
  { id: 1, name: "Cosmic Dreamer #1234", collection: "Cosmic Dreams", price: "2.5 ETH", usdPrice: "$4,250", creator: "0x1a2b...3c4d", likes: 234, image: "CD" },
  { id: 2, name: "Digital Ape #5678", collection: "Bored Apes", price: "15.8 ETH", usdPrice: "$26,860", creator: "0x5e6f...7g8h", likes: 892, image: "DA" },
  { id: 3, name: "Pixel Punk #9012", collection: "CryptoPunks", price: "45.0 ETH", usdPrice: "$76,500", creator: "0x9i0j...1k2l", likes: 1567, image: "PP" },
  { id: 4, name: "Abstract Mind #3456", collection: "Art Blocks", price: "3.2 ETH", usdPrice: "$5,440", creator: "0x3m4n...5o6p", likes: 456, image: "AM" },
  { id: 5, name: "Neon City #7890", collection: "Neon Dreams", price: "1.8 ETH", usdPrice: "$3,060", creator: "0x7q8r...9s0t", likes: 321, image: "NC" },
  { id: 6, name: "Galaxy Explorer #2345", collection: "Space NFTs", price: "5.5 ETH", usdPrice: "$9,350", creator: "0x1u2v...3w4x", likes: 678, image: "GE" },
];

const categories = ["All", "Art", "Collectibles", "Music", "Photography", "Sports"];

export default function NFTMarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">NFT Marketplace</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Discover and collect unique digital assets</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search NFTs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--secondary)]/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nfts.map((nft) => (
            <div key={nft.id} className="premium-card overflow-hidden group">
              <div className="relative h-64 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/80">{nft.image}</span>
                <button className="absolute top-3 right-3 rounded-full bg-card/20 backdrop-blur p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-5 w-5 text-white" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[var(--muted-foreground)]">{nft.collection}</span>
                  <span className="flex items-center gap-1 text-xs text-[var(--muted-foreground)]">
                    <Heart className="h-3 w-3" />
                    {nft.likes}
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--foreground)] mb-3">{nft.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[var(--muted-foreground)]">Current Price</p>
                    <p className="font-bold text-[var(--foreground)]">{nft.price}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{nft.usdPrice}</p>
                  </div>
                  <button className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
