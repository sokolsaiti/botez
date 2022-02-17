import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Si të luhet" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Gjeje shtetin e shfaqur në <Worldle /> në 6 tentime.
        </div>
        <div>Çdo tentim duhet të jetë një shtet apo territor real, ...</div>
        <div>
          Pas çdo supozimi, ju shfaqet distanca, drejtimi dhe afërsia, ndërmjet
          supozimit tuaj dhe shtetit që kërkohet
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Shembujt</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Kili",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Supozimi yt <span className="uppercase font-bold">Kili</span> është{" "}
            {formatDistance(13557000, settingsData.distanceUnit)} larg nga
            shteti që kërkohet, poashtu shteti që kërkohet është në drejtimin
            verilindor dhe afërsia është vetëm 32% sepse është mjaft larg
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Finlanda",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Supozimi yt i dytë{" "}
            <span className="uppercase font-bold">Finlanda</span> po afrohet! Në
            {formatDistance(3206000, settingsData.distanceUnit)} largësi,
            drejtimin juglindor dhe 84%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "Libani",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Supozimi i rradhës,
            <span className="uppercase font-bold">Libani</span>, është shteti që
            kërkohet! Urime! 🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Një <Worldle /> e re do të jetë në dispozicion çdo ditë!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Mbi largësitë</div>
        <div>
          Largësitë e shfaqura llogariten sipas distancës ndërmjet pikave
          qendrore të shteteve përkatëse.
        </div>
        <div>
          Për shembull, largësia e llogaritur ndërmjet SHBA dhe Kanadës është
          rreth {formatDistance(2_260_000, settingsData.distanceUnit)} përkundër
          faktit se këto dy shtete kanë kufi të përbashkët.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> është frymëzuar nga{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        krijuar nga{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          Krijuar nga{" "}
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @teuteuf
          </a>
        </div>
        <div>
          Përkthyer nga{" "}
          <a
            className="underline"
            href="https://twitter.com/sokolsaiti"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sokolsaiti
          </a>
        </div>
        <div>
          Want to support?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blejani ni kafe ktij djalit! ☕
          </a>
        </div>
      </div>
    </Panel>
  );
}
