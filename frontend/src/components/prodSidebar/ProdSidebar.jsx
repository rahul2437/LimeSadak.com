import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import style from "./ProdSidebar.module.css";

const ProdSidebar = () => {
  return (
    <>
      <div className={style.top}>
        <p>Mens Fashion - T Shirts, Suits, Blazers & Jeans</p>
        <p>60883 products</p>
      </div>
      <div className={style.bottom}>
        <p>FILTER & SORT</p>
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <p>Sort by</p>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="radio" name="trending" id="trending" />{" "}
                    <p>Trending</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="radio" name="new" id="new" /> <p>New</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="radio" name="discounts" id="discounts" />{" "}
                    <p>Disounts</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="radio" name="hPrice" id="hPrice" />{" "}
                    <p>High Price</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="radio" name="lPrice" id="lPrice" />{" "}
                    <p>Low Price</p>
                  </div>
                </AccordionPanel>

                {/* PRICE  */}

                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <p>Price</p>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="trending" id="trending" />{" "}
                    <p>Trending</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="new" id="new" /> <p>New</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="discounts" id="discounts" />{" "}
                    <p>Disounts</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="hPrice" id="hPrice" />{" "}
                    <p>High Price</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="lPrice" id="lPrice" />{" "}
                    <p>Low Price</p>
                  </div>
                </AccordionPanel>

                {/* DISCOUNTS */}

                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <p>Price</p>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="trending" id="trending" />{" "}
                    <p>Trending</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="new" id="new" /> <p>New</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="discounts" id="discounts" />{" "}
                    <p>Disounts</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="hPrice" id="hPrice" />{" "}
                    <p>High Price</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="lPrice" id="lPrice" />{" "}
                    <p>Low Price</p>
                  </div>
                </AccordionPanel>

                {/* SIZE */}

                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <p>Price</p>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="trending" id="trending" />{" "}
                    <p>Trending</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="new" id="new" /> <p>New</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="discounts" id="discounts" />{" "}
                    <p>Disounts</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="hPrice" id="hPrice" />{" "}
                    <p>High Price</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="lPrice" id="lPrice" />{" "}
                    <p>Low Price</p>
                  </div>
                </AccordionPanel>

                {/* BRAND */}

                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <p>Price</p>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="trending" id="trending" />{" "}
                    <p>Trending</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="new" id="new" /> <p>New</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="discounts" id="discounts" />{" "}
                    <p>Disounts</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="hPrice" id="hPrice" />{" "}
                    <p>High Price</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="lPrice" id="lPrice" />{" "}
                    <p>Low Price</p>
                  </div>
                </AccordionPanel>

                {/* CATEGORY */}

                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <p>Price</p>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="trending" id="trending" />{" "}
                    <p>Trending</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="new" id="new" /> <p>New</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="discounts" id="discounts" />{" "}
                    <p>Disounts</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="hPrice" id="hPrice" />{" "}
                    <p>High Price</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="lPrice" id="lPrice" />{" "}
                    <p>Low Price</p>
                  </div>
                </AccordionPanel>

                {/* TYPE */}

                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <p>Price</p>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AddIcon fontSize="12px" />
                  )}
                </AccordionButton>

                <AccordionPanel pb={4}>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="trending" id="trending" />{" "}
                    <p>Trending</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="new" id="new" /> <p>New</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="discounts" id="discounts" />{" "}
                    <p>Disounts</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="hPrice" id="hPrice" />{" "}
                    <p>High Price</p>
                  </div>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <input type="checkbox" name="lPrice" id="lPrice" />{" "}
                    <p>Low Price</p>
                  </div>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default ProdSidebar;
