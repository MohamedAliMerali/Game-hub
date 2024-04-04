import { useEffect, useState } from "react";
import PlatformsService, { Platform } from "../services/platforms-services";
import { CanceledError } from "axios";

const usePlatforms = () => {
  const [platforms, setplatforms] = useState<Platform[]>([]);
  const [isPlatformsLoading, setPlatformsLoading] = useState(false);
  const [platformsError, setPlatformsError] = useState("");

  // get Platforms
  useEffect(() => {
    setPlatformsError("");
    setPlatformsLoading(true);

    const { request, cancel } = PlatformsService.getPlatforms();
    request
      .then((res) => {
        setplatforms(res.data.results);
        setPlatformsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setPlatformsLoading(false);
        setPlatformsError(err);
      });

    return () => cancel();
  }, []);

  return { platforms, platformsError, isPlatformsLoading };
};

export default usePlatforms;
