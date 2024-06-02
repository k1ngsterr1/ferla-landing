import React from "react";
import Image from "next/image";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";

import styles from './styles.module.scss'

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const ManageScreenMobile = () => {
    return (
        <section className={styles.manage_screen_mob}>
            <MiniText text="From Initial Concept to Market Leader"/>
            <h4 className={styles.bikes_everywhere_mob__text_heading}>
            Redefining Mobile Business Solutions with<strong className="text-red"> Ferla Bikes</strong>
            </h4>
        </section>
    )
}