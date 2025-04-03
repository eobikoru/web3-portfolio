"use client"

import { useState, useEffect, useRef } from "react"

export function TypewriterEffect() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentLine, setCurrentLine] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(80)

  const codeSnippet = [
    "// Smart contract for NFT marketplace",
    "contract NFTMarketplace is ERC721 {",
    "  mapping(uint256 => MarketItem) private idToMarketItem;",
    "  uint256 private _tokenIds;",
    "  uint256 private _itemsSold;",
    "",
    "  struct MarketItem {",
    "    uint256 tokenId;",
    "    address payable seller;",
    "    address payable owner;",
    "    uint256 price;",
    "    bool sold;",
    "  }",
    "",
    "  function createMarketItem(",
    "    uint256 tokenId,",
    "    uint256 price",
    "  ) public payable {",
    '    require(price > 0, "Price must be at least 1 wei");',
    "",
    "    idToMarketItem[tokenId] = MarketItem(",
    "      tokenId,",
    "      payable(msg.sender),",
    "      payable(address(this)),",
    "      price,",
    "      false",
    "    );",
    "  }",
    "}",
  ]

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Still typing current line
        if (currentIndex < codeSnippet[currentLine].length) {
          setDisplayText((prev) => prev + codeSnippet[currentLine][currentIndex])
          setCurrentIndex((prev) => prev + 1)
          setTypingSpeed(Math.random() * (80 - 50) + 50)
        }
        // Finished typing current line
        else {
          setDisplayText((prev) => prev + "\n")
          setCurrentIndex(0)
          setCurrentLine((prev) => (prev + 1) % codeSnippet.length)
          setTypingSpeed(500) // Pause before next line

          // Scroll to bottom of container
          if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
          }
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, currentLine, isDeleting, typingSpeed])

  return (
    <div className="relative font-mono text-sm md:text-base">
      <div className="flex items-center justify-between mb-2 px-4 py-1 bg-secondary/20 rounded-t-md border-b border-border">
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-muted-foreground">Solidity</div>
      </div>
      <div ref={containerRef} className="p-4 bg-secondary/10 rounded-b-md h-64 overflow-y-auto">
        <pre className="text-left">
          <code className="text-green-400">
            {displayText}
            <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5"></span>
          </code>
        </pre>
      </div>
    </div>
  )
}

