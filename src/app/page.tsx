"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter, // フッターを追加して閉じるボタンを配置
  DialogClose, // 閉じるボタン用
} from "@/components/ui/dialog";
import { useState } from "react";

const seatName = [
  "ぴーちゃん",
  "もるちゃん",
  "だいやん",
  "おこま",
  "たちばなな",
  "おはぎ",
  "るかちゃん",
  "きくちふうま",
];

interface SeatAssignment {
  seatNumber: number;
  name: string;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [seatingArrangement, setSeatingArrangement] = useState<
    SeatAssignment[]
  >([]);

  const shuffleArray = (array: string[]): string[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleGenerateSeating = () => {
    if (seatName.length !== 8) {
      console.error("参加者の名前の数を正しく設定してください。");

      return;
    }

    const shuffleNames = shuffleArray(seatName);

    const newArrangement: SeatAssignment[] = shuffleNames.map(
      (name, index) => ({
        seatNumber: index + 1,
        name: name,
      })
    );

    setSeatingArrangement(newArrangement);
    setIsOpen(true);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* DialogTriggerを使わずに手動で開閉を制御 */}
        <Button onClick={handleGenerateSeating}>席順を生成する</Button>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>席順結果</DialogTitle>
            <DialogDescription>
              ランダムに生成された席順です。
            </DialogDescription>
          </DialogHeader>

          {/* 席順リストを表示 */}
          <div className="grid gap-4 py-4">
            {seatingArrangement.length > 0 ? (
              <ul className="space-y-2">
                {seatingArrangement.map((seat) => (
                  <li
                    key={seat.seatNumber}
                    className="flex justify-between p-2 border rounded"
                  >
                    <span className="font-semibold">
                      席番号 {seat.seatNumber}:
                    </span>
                    <span>{seat.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground">
                まだ席順が生成されていません。
              </p>
            )}
          </div>

          <DialogFooter>
            {/* DialogCloseを使ってクリック時にダイアログを閉じる */}
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                閉じる
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
