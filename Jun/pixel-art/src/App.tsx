import React, { useState, useCallback } from 'react';

const COLORS = {
  white: '#fff',
  gray: '#e9ecef',
  black: '#000',
  red: '#cc0001',
  orange: '#fb940b',
  yellow: '#ffff01',
  green: '#01cc00',
  teal: '#38d9a9',
  blue: '#228be6',
  purple: '#7950f2',
  beige: '#ff8787',
};

const GRID_SIZE = 15;
const PIXEL_COUNT = GRID_SIZE * GRID_SIZE;

enum Mode {
  Draw = 'draw',
  Erase = 'erase',
}

interface PixelProps {
  i: number;
  hex: string | null;
  onMouseEnter: (index: number) => void;
  onMouseDown: (index: number) => void;
}

const Pixel = React.memo(
  ({ i, hex, onMouseEnter, onMouseDown }: PixelProps) => {
    return (
      <div
        className="pixel"
        style={{
          backgroundColor: hex ?? (i % 2 === 0 ? '#fff' : '#e9ecef'),
        }}
        onMouseDown={() => onMouseDown(i)}
        onMouseEnter={() => onMouseEnter(i)}
      ></div>
    );
  }
);

interface ModeSelectorProps {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeSelector = ({ mode, setMode }: ModeSelectorProps) => {
  return (
    <div className="mode">
      <button
        className={mode === Mode.Draw ? 'active' : ''}
        onClick={() => setMode(Mode.Draw)}
      >
        Draw
      </button>
      <button
        className={mode === Mode.Erase ? 'active' : ''}
        onClick={() => setMode(Mode.Erase)}
      >
        Erase
      </button>
    </div>
  );
};

interface ColorPickerProps {
  selectedColor: string | null;
  onColorSelect: (color: string) => void;
}

const ColorPicker = ({ selectedColor, onColorSelect }: ColorPickerProps) => {
  return (
    <ul>
      {Object.entries(COLORS).map(([color, hex]) => (
        <li key={color}>
          <button
            onClick={() => onColorSelect(hex)}
            className={`color ${hex === selectedColor && 'selected'}`}
            style={{ backgroundColor: hex }}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default function App() {
  const [pixels, setPixels] = useState<(string | null)[]>(
    Array(PIXEL_COUNT).fill(null)
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    COLORS.yellow
  );
  const [isDragging, setIsDragging] = useState(false);
  const [mode, setMode] = useState<Mode>(Mode.Draw);

  const handlePixelUpdate = useCallback(
    (index: number) => {
      setPixels((currentPixels) => {
        const newPixels = [...currentPixels];
        newPixels[index] = mode === Mode.Draw ? selectedColor : null;
        return newPixels;
      });
    },
    [mode, selectedColor]
  );

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setMode(Mode.Draw);
  };

  const handleMouseEnter = (index: number) => {
    if (isDragging) {
      handlePixelUpdate(index);
    }
  };

  const handleMouseDown = (index: number) => {
    setIsDragging(true);
    handlePixelUpdate(index);
  };

  const handleClear = () => {
    setPixels((currentPixels) => {
      const copy = [...currentPixels];
      copy.fill(null);
      return copy;
    });
  };

  return (
    <div>
      <div
        className="canvas"
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {pixels.map((hex, i) => (
          <Pixel
            key={i}
            i={i}
            hex={hex}
            onMouseEnter={handleMouseEnter}
            onMouseDown={handleMouseDown}
          />
        ))}
      </div>
      <div className="controls">
        <ModeSelector mode={mode} setMode={setMode} />
        <ColorPicker
          selectedColor={selectedColor}
          onColorSelect={handleColorSelect}
        />
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
