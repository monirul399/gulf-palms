'use client'

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton";
import { useUserDataProvider } from "@/providers/UserDataProvider";
import { UserService } from "@/services/api/user.service";
import Link from "next/link"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function AddressesPage() {

  const { userSettings, setUserSettings } = useUserDataProvider();
  const { t } = useTranslation("common")


  useEffect(() => {
    const getSettings = async () => {
      if (userSettings === null) {
        UserService.GetSettings()
          .then(response => {
            // console.log(response);
            setUserSettings(response);
          })
          .catch(error => {
            console.error(error);
          });
      }
    };

    getSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p className="mb-8 text-muted-foreground">
        {t("address.title")}
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{t("address.billing")}</h2>
          <div>
            <Link href='/my-account/billing' className="text-gray-700 hover:text-primary">{t("address.editBilling")}</Link>
            <address className="rounded-lg border py-4 text-black/60">
              {
                userSettings === null &&
                <div className="flex flex-col gap-2 px-3">
                  <Skeleton className="h-5 w-full bg-slate-200" />
                  <Skeleton className="h-5 w-full bg-slate-200" />
                  <Skeleton className="h-5 w-full bg-slate-200" />
                </div>
              }
              {
                userSettings !== null &&
                <>
                  <p>{userSettings?.billing?.first_name} {userSettings?.billing?.last_name}</p>
                  <p>{userSettings?.billing?.address_1}</p>
                  <p>{userSettings?.billing?.address_2}</p>
                  <p>{userSettings?.billing?.city}</p>
                </>
              }
            </address>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">{t("address.shipping")}</h2>
          <div>
            <Link href='/my-account/shipping' className="text-gray-700 hover:text-primary">{t("address.editShipping")}</Link>
            <address className="rounded-lg border py-4 text-black/60">
              {
                userSettings === null &&
                <div className="flex flex-col gap-2 px-3">
                  <Skeleton className="h-5 w-full bg-slate-200" />
                  <Skeleton className="h-5 w-full bg-slate-200" />
                  <Skeleton className="h-5 w-full bg-slate-200" />
                </div>
              }
              {
                userSettings !== null &&
                <>
                  <p>{userSettings?.shipping?.first_name} {userSettings?.shipping?.last_name}</p>
                  <p>{userSettings?.shipping?.address_1}</p>
                  <p>{userSettings?.shipping?.address_2}</p>
                  <p>{userSettings?.shipping?.city}</p>
                </>
              }
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}

